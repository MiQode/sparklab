import { companyLogos } from '../constants';

const CompanyLogos = ({ className }) => {
  return (
    <div
      className={className}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="4000"
    >
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create modern innovative solutions with
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={130} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
