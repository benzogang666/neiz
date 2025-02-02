import "./Vacancies.css";

const Vacancies = () => {
  return (
    <>
      <div className="vacancies">
        <div className="vacancies-info">
          Если вы хотите стать частью нашей команды, свяжитесь с администратором
          для уточнения всех деталей. Мы всегда рады новым сотрудникам
        </div>
        <div className="vacancies-cards">
          <div className="vacancy-card">
            <div className="v-c-status"></div>
            <div className="v-c-data">
              <div className="v-c-named">Раннер</div>
              <div className="v-c-schedule">График: 5/2</div>
              <div className="v-c-salary">
                Зарплата: {`${Intl.NumberFormat("ru-Ru").format(12000)} ₸`}
              </div>
            </div>
          </div>
          <div className="vacancy-card">
            <div className="v-c-status"></div>
            <div className="v-c-data">
              <div className="v-c-named">Официант</div>
              <div className="v-c-schedule">График: 2/2</div>
              <div className="v-c-salary">
                Зарплата: {`${Intl.NumberFormat("ru-Ru").format(10000)} ₸`}
              </div>
            </div>
          </div>
          <div className="vacancy-card">
            <div className="v-c-status"></div>
            <div className="v-c-data">
              <div className="v-c-named">Кассир</div>
              <div className="v-c-schedule">График: 5/2</div>
              <div className="v-c-salary">
                Зарплата: {`${Intl.NumberFormat("ru-Ru").format(10000)} ₸`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vacancies;