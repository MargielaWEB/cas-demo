import asyncio
import logging
import os

from aiogram import Bot, Dispatcher, types

from aiogram.utils.keyboard import ReplyKeyboardBuilder

logging.basicConfig(level=logging.info)

bot = Bot(os.getenv('7644552587:AAGLAQChwYLUXptpFobaItlqo5NR6ZPPROI'))
dp = Dispatcher()

@dp.message()
async def start(message: types.Message):
    webAppInfo = types.WebAppInfo(url="https://margielaweb.github.io/cas-demo/")
    builder = ReplyKeyboardBuilder()
    builder.add(types.KeyboardButton(text='Отправить данные', web_app=webAppInfo))
    await message.answer(text='Привет!', reply_markup=builder.as_markup())

async def main():
    await bot.delete_webhook(drop_pending_updates=True)
    await dp.start_polling(bot)
    
if __name__ == "__main__":
    asyncio.run(main())

@dp.message(F.content_type == ContentType.WEB_APP_DATA)
async def parse_data(message: types.Message):
    data = json.loads(message.web_app_data.data)
    await message.answer(f'<b>{data["title"]}</b>\n\n<code>{data["desc"]}</code>\n\n{data["text"]}', parse_mode=ParseMode.HTML)