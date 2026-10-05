import { pool } from "../db.js";

const redondear = (numero, decimales) => Number(numero.toFixed(decimales));

export const crear = async (req, res) => {
  const { lado_a, lado_b } = req.body;
  const perimetro = redondear(2 * (lado_a + lado_b), 2);
  const superficie = redondear(lado_a * lado_b, 4);

  const [resultado] = await pool.query(
    "INSERT INTO rectangulos (lado_a, lado_b, perimetro, superficie) VALUES (?, ?, ?, ?)",
    [lado_a, lado_b, perimetro, superficie]
  );

  res.status(201).json({ id: resultado.insertId, lado_a, lado_b, perimetro, superficie });
};