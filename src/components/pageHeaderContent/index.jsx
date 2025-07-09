import './styles.scss'

const PageHeaderContent = ({ headerText, icon }) => {
  console.log("💡 PageHeaderContent rendered");

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHeaderContent;

