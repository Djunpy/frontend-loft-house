const Feedback: React.FC = () => {
	return (
		<section className='feedback'>
			<div className='container'>
				<div className='feedback__title'>
					<h2 className='title-2'>Есть вопросы?</h2>
				</div>
				<form action='' className='feedback__form form'>
					<p className='form__privacy'>
						*Мы никому не передаем ваши данные. <br />И не сохраняем ваш номер в
						базу.
					</p>
					<input className='form__input' placeholder='Ваше имя ' type='text' />
					<input
						className='form__input'
						placeholder='Ваш телефон'
						type='text'
					/>

					<button type='submit' className='form__button'>
						Посмотреть район
					</button>
				</form>
			</div>
		</section>
	)
}

export default Feedback
