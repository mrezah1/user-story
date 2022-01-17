import { generateRandomJob } from "utils";
import { ReactComponent as Location } from "assets/icons/location.svg";
import { ReactComponent as Email } from "assets/icons/email.svg";
import { ReactComponent as Phone } from "assets/icons/phone.svg";

const UserCard = ({ DATA }) => {
  const randomJob = generateRandomJob();
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <div className="card-img">
          <img src={DATA.picture.medium} height="100%" width="100%" />
        </div>
        <div>
          <h3 className="card-title">
            {DATA.name.first + " " + DATA.name.last}
          </h3>
          <p className="card-job">{randomJob}</p>
        </div>
      </div>

      <div className="card-main">
        <p>{`Hello guys , i'm ${DATA.name.title} , i'm in ${DATA.location.city},${DATA.location.country}`}</p>
        <ul className="card-contact">
          <li>
            <span>
              <Email />
              Email
            </span>
            <span>{DATA.email.slice(-20)}</span>
          </li>
          <li>
            <span>
              <Phone />
              Phone
            </span>
            <span>{DATA.cell}</span>
          </li>
          <li>
            <span>
              <Location /> Location
            </span>
            <span>{DATA.location.country + " , " + DATA.location.city}</span>
          </li>
        </ul>
      </div>

      <div className="card-footer">
        <button>Message</button>
        <button>Follow</button>
      </div>
    </div>
  );
};
export default UserCard;
