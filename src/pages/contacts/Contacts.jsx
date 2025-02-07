import "./Contacts.css";

const Contacts = () => {
  return (
    <>
      <div className="contacts">
        <div className="contact">
          <div className="contact-branch">Арафат 1</div>
          <div className="contact-phone">Номер: +777752112</div>
          <div className="contact-adress">Адрес: Айтеке Би 40</div>
        </div>
        <div className="contact">
          <div className="contact-branch">Арафат 2</div>
          <div className="contact-phone">Номер: +777044544</div>
          <div className="contact-adress">Адрес: Мухтар Ауезова 4Г</div>
        </div>
      </div>
    </>
  );
};

export default Contacts;