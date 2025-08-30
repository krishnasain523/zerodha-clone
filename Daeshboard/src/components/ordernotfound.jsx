import { Link } from "react-router-dom";

export default function Ordernotfound()
{
    return(<>
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
    </>
    )
}