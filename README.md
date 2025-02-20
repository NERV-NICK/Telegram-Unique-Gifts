# Telegram Gift Bot 🤖🎁

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NERV-NICK/Telegram-Unique-Gifts.git
   cd telegram-gift-bot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file and add your token:**
   ```env
   TOKEN=your-telegram-bot-token
   ```

4. **Run the bot:**
   ```bash
   npm start
   ```

## 🛠 Commands

- `/start` - Start the bot.
- `/gifts` - Get a list of all available unique gifts.

## 🎁 How It Works

When a user sends the `/gifts` command, the bot requests all available gifts from the Telegram API. It then filters unique gifts and sends them to the user.

### Example Response:
```json
[
  {
    "id": "12345",
    "emoji": "🎁",
    "star_count": 5,
    "upgrade_star_count": 10,
    "remaining_count": 100,
    "total_count": 1000
  },
  {
    "id": "67890",
    "emoji": "🎉",
    "star_count": 3,
    "upgrade_star_count": 6,
    "remaining_count": 50,
    "total_count": 500
  }
]
```

## 🛠 Technologies

- [Node.js](https://nodejs.org/)
- [Grammy](https://grammy.dev/) - Telegram bot framework.
- [dotenv](https://www.npmjs.com/package/dotenv) - For loading environment variables.


## 📞 Contact

If you have any questions or suggestions, please reach out:

- **Telegram:** [@NERV_NICKK](https://t.me/NERV_NICKK)"# Telegram-Unique-Gifts" 
