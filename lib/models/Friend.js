import { pool } from 'pg';

export default class Friend {
  id;
  name;
  lifeform;

  constructor (row) {
    this.id = Number(row.id);
    this.name = row.name;
    this.lifeform = row.lifeform;
  }

  static async insert({ name, lifeform }) {
    const { rows } = await pool.query(`
      INSERT INTO friends (name, lifeform)
      VALUES ($1, $2)
      RETURNING *;
    `, [name, lifeform]);

    return new Friend(rows[0]);
  }

  static async get(id) {
    const { rows } = await pool.query(`
      SELECT * 
      FROM friends
      WHERE id = $1;
    `, [id]);

    return new Friend(rows[0]);
  }

  static async gather() {
    const { rows } = await pool.query(`
      SELECT *
      FROM friends
    `);

    return rows.map(row => new Friend(row));
  }

  static async update({ id, name, lifeform }) {
    const { rows } = await pool.query(`
      UPDATE friends
      SET name = $2, lifeform = $3
      WHERE id = $1
      RETURNING *;
    `, [id, name, lifeform]);

    return new Friend(rows[0]);
  }

  static async remove(id) {
    const { rows } = await pool.query(`
      DELETE FROM friends
      WHERE id = $1
      RETURNING *;
    `, [id]);

    return new Friend(rows[0]);
  }
}
