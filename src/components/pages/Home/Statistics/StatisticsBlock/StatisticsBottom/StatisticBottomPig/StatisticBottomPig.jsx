import "./StatisticBottomPig.scss";
import Parasi from "../../../../../../../assets/img/Statistics/parasi.png";

function StatisticPig() {
  return (
    <>
      <img
        className='statistic__pig'
        loading='lazy'
        src={Parasi}
        alt='parasi'
        width='223'
        height='270'
      />
    </>
  );
}

export default StatisticPig;
