import Account from "../models/accountModel.mjs";
import bcrypt from "bcrypt";

const loginAccount = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (username && password) {
            const account = await Account.findOne({ where: { username: username } })
            if (account) {
                const validateAccount = await bcrypt.compare(password, account['password'])
                if (validateAccount) {
                    if (account['role'] === "murid") {
                        res.status(202).json({ status: 202, message: "Login Berhasil", role: account['role'], token: "asdasdas" })
                    } else if (account['role'] === "guru") {
                        res.status(202).json({ status: 202, message: "Login Berhasil", role: account['role'], token: "aqewqdqwq" })
                    } else if (account['role'] === "admin") {
                        res.status(202).json({ status: 202, message: "Login Berhasil", role: account['role'], token: "adminn#1234" })
                    }
                } else {
                    res.status(401).json({
                        status: 401,
                        message: "Username atau password tidak cocok"
                    })
                }
            } else {
                res.status(401).json({
                    status: 401,
                    message: "Username atau password tidak cocok"
                })
            }
        } else {
            res.status(400).json({
                status: 400,
                message: "Masukan username dan password"
            })
        }
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: "Terjadi Kesalahan di sisi server",
            error: err
        })
    }
}
const AddAccount = async (req, res) => {
    try {
        const { nama_lengkap, email, username, password, role } = req.body;

        if (nama_lengkap && email && username && password && role) {
            const hashedPassword = await bcrypt.hash(password, 10);
            try {
                const CheckDuplicateAccount = await Account.findOne({ where: { nama_lengkap: nama_lengkap, username: username } })
                if (CheckDuplicateAccount) {
                    res.status(403).json({
                        status: 403,
                        message: "username dan nama lengkap telah digunakan, silahkan gunakan username, atau nama lengkap yang lain"
                    })
                } else {
                    await Account.create({
                        nama_lengkap: nama_lengkap,
                        role: role,
                        email: email,
                        username: username,
                        password: hashedPassword
                    });
                    return res.status(201).json({
                        status: 201,
                        message: "Akun berhasil terdaftar. silahkan coba untuk login",
                    })
                }
            } catch (err) {
                res.status(403).json({
                    status: 403,
                    message: "username dan nama lengkap telah digunakan, silahkan gunakan username, atau nama lengkap yang lain"
                })
            }
        } else {
            return res.status(400).json({
                status: 400,
                message: "Data akun harus terisi",
            })
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: 500,
            message: "Terjadi kesalahan di sisi server",
            error: err
        })
    }
}

export { loginAccount, AddAccount };