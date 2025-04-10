import UserModel from "../models/UserModel.js";


export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado." });
    }

    const isPasswordCorrect = password == user.password;
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Senha incorreta." });
    }

    res.status(200).json({ message: "Login bem-sucedido", userId: user.id });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Erro no servidor, tente novamente mais tarde." });
  }
};