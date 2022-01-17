import Skeleton from "react-loading-skeleton";

const MySkeleton = () => {
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <div>
          <Skeleton
            circle
            height="100%"
            width="100%"
            containerClassName="avatar-skeleton"
          />
        </div>

        <div>
          <h3 className="card-title">
            <Skeleton width="100%" height={22} />
          </h3>
          <p className="card-job">
            <Skeleton width="80%" height={16} />
          </p>
        </div>
      </div>

      <div className="card-main">
        <p>
          <Skeleton
            count={4}
            style={{ marginTop: 7 }}
            width="100%"
            height={22}
          />
        </p>
      </div>

      <div className="card-footer">
        <div>
          <Skeleton width="100%" height={30} />
        </div>
        <div>
          <Skeleton width="100%" height={30} />
        </div>
      </div>
    </div>
  );
};

export default MySkeleton;
