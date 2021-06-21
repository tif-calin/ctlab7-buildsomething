import { sendSms } from '../models/Friend.js';

export default class FriendService {
  static async create({ name, lifeform }) {
    await sendSms(
      process.env.RECIPIENT_NUMBER, 
      `You have a new friend! A ${lifeform} named ${name} :)`
    );
  }

  static async update({ name, lifeform }) {
    await sendSms(
      process.env.RECIPIENT_NUMBER,
      `Your friend the ${lifeform} is now named ${name}.`
    );
  }

  static async delete({ name, lifeform }) {
    await sendSms(
      process.env.RECIPIENT_NUMBER,
      `${name} the ${lifeform} has unfriended you? You will be alone forever, asshole.`
    );
  }
}
