import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { nome, email, telefone1, telefone2, mensagem } =
      await request.json();

    if (!nome || !email || !telefone1 || !mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${nome}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: "Novo contato pela landing page",
      text: `
        Nome: ${nome}
        E-mail: ${email}
        Telefone 1: ${telefone1}
        Telefone 2: ${telefone2 || "Não informado"}

        Mensagem:
        ${mensagem}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "E-mail enviado com sucesso!",
    });
  } catch (error) {
    console.error("[EMAIL ERROR]", error);
    return NextResponse.json(
      { error: "Erro ao enviar o e-mail." },
      { status: 500 }
    );
  }
}
