import Revenue from "../Assets/revenue.svg";
import Transactions from "../Assets/transactions.svg";
import Users from "../Assets/users.svg";
import Likes from "../Assets/likes.svg";
import Notifications from "../Assets/notifications.svg";
// import Profile from "../Assets/profile.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";

function Dashboard(props) {
  const loginDetails = props.loginDetails;
  const styles = {
    dot: {
      height: "11px",
      width: "11px",
      borderRadius: "50%",
      display: "inline-block",
      marginRight: "10px",
    },
    stats: {
      height: "120px",
      borderRadius: "20px",
      color: "#000",
    },
    logo: {
      width: "26.4px",
      height: "24px",
      display: "flex",
    },
    statTitle: {
      color: "#000",
      fontSize: "14px",
      fontFamily: "Lato",
      marginLeft: "25px",
      marginBottom: "5px",
    },
    statAmount: {
      color: "#000",
      fontSize: "24px",
      fontFamily: "Open Sans",
      fontWeight: "700",
      marginLeft: "25px",
      marginBottom: "20px",
    },
    bullets: {
      color: "#000",
      fontSize: "14px",
      fontFamily: "Montserrat",
      fontWeight: "700",
    },
    bulletPercent: {
      color: "#858585",
      fontSize: "12px",
      fontFamily: "Lato",
    },
    line: {
      color: "#666",
      fontSize: "14px",
      fontFamily: "Lato",
      fontWeight: "700",
    },
    lineSub: {
      color: "#999",
      fontSize: "12px",
      fontFamily: "Lato",
    },
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          font: {
            family: "Open Sans",
            size: "14px",
          },
        },
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          lineWidth: 0,
        },
        display: true,
      },
      y: {
        suggestedMin: 0,
        suggestedMax: 500,
      },
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
          },
          ticks: {
            precision: 100,
          },
        },
      ],
    },
    tension: 0.2,
  };

  const labels = ["", "Week 1", "Week 2", "Week 3", "Week 4"];

  const data = {
    labels,
    datasets: [
      {
        label: "User",
        data: [100, 400, 150, 430, 190, 250],
        borderColor: "#E9A0A0",
        backgroundColor: "#E9A0A0",
      },
      {
        label: "Guest",
        data: [200, 390, 200, 300, 210, 450],
        borderColor: "#9BDD7C",
        backgroundColor: "#9BDD7C",
      },
    ],
  };

  const pieOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const pieData = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        // label: '# of Votes',
        data: [55, 31, 14],
        backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
      },
    ],
  };

  const logout = () => {
    window.location.replace("");
  };
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F5F5" }}>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed z-40 w-64 transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
        style={{
          borderRadius: "20px",
          height: "97vh",
          top: "1vh",
          left: "1vh",
        }}
      >
        <div
          className="h-full px-3 py-4 overflow-y-auto bg-black"
          style={{ borderRadius: "20px" }}
        >
          <div
            className="text-white"
            style={{
              fontSize: "36px",
              fontFamily: "Montserrat",
              fontWeight: "700",
              paddingTop: '20px',
              paddingBottom: '50px',
              paddingLeft: '10px'
            }}
          >
            Board.
          </div>
          <ul className="space-y-2 text-white">
            <li
              style={{
                fontSize: "18px",
                fontFamily: "Montserrat",
                fontWeight: "700",
              }}
            >
              <span className="ml-3">Dashboard</span>
            </li>

            <li
              style={{
                fontSize: "18px",
                fontFamily: "Montserrat",
              }}
            >
              <span className="ml-3">Transactions</span>
            </li>

            <li
              style={{
                fontSize: "18px",
                fontFamily: "Montserrat",
              }}
            >
              <span className="ml-3">Schedule</span>
            </li>

            <li
              style={{
                fontSize: "18px",
                fontFamily: "Montserrat",
              }}
            >
              <span className="ml-3">Users</span>
            </li>

            <li
              style={{
                fontSize: "18px",
                fontFamily: "Montserrat",
              }}
            >
              <span className="ml-3">Settings</span>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 px-7 lg:px-15">
        {/* Nav */}

        <div className="flex justify-between items-center">
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "29px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            Dashboard
          </div>
          <div className="flex items-center">
            <span className="inline-block mx-5 my-2">
              <input
                className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="search"
                type="text"
                placeholder="Search..."
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#FFF",
                }}
              />
            </span>
            <span className="inline-block mx-5 my-2">
              <img src={Notifications} alt="notifications" />
            </span>
            <span className="inline-block mx-5 my-2">
              <img
                src={loginDetails.picture}
                alt='Profile Picture'
                style={{
                  maxHeight: "30px",
                  maxWidth: "30px",
                  borderRadius: "50%",
                  display: "block",
                  width: "auto",
                  height: "auto",
                }}
              />
            </span>
            <button onClick={logout}>Log out</button>
          </div>
        </div>

        {/* Top icons */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full p-5">
          <div style={{ ...styles.stats, backgroundColor: "#DDEFE0" }}>
            <div className="flex flex-row-reverse">
              <img
                src={Revenue}
                alt="icon"
                style={{
                  ...styles.logo,
                  marginTop: "20px",
                  marginRight: "25px",
                }}
              />
            </div>
            <div style={styles.statTitle}>Total Revenues</div>
            <div style={styles.statAmount}>$2,129,430</div>
          </div>
          <div style={{ ...styles.stats, backgroundColor: "#F4ECDD" }}>
            <div className="flex flex-row-reverse">
              <img
                src={Transactions}
                alt="icon"
                style={{
                  ...styles.logo,
                  marginTop: "20px",
                  marginRight: "25px",
                }}
              />
            </div>
            <div style={styles.statTitle}>Total Transactions</div>
            <div style={styles.statAmount}>1,520</div>
          </div>
          <div style={{ ...styles.stats, backgroundColor: "#EFDADA" }}>
            <div className="flex flex-row-reverse">
              <img
                src={Likes}
                alt="icon"
                style={{
                  ...styles.logo,
                  marginTop: "20px",
                  marginRight: "25px",
                }}
              />
            </div>
            <div style={styles.statTitle}>Total Likes</div>
            <div style={styles.statAmount}>9,721</div>
          </div>
          <div style={{ ...styles.stats, backgroundColor: "#EFDADA" }}>
            <div className="flex flex-row-reverse">
              <img
                src={Users}
                alt="icon"
                style={{
                  ...styles.logo,
                  marginTop: "20px",
                  marginRight: "25px",
                }}
              />
            </div>
            <div style={styles.statTitle}>Total Users</div>
            <div style={styles.statAmount}>892</div>
          </div>
        </div>

        {/* Line chart */}

        <div
          className="bg-white m-5"
          style={{
            height: "359px",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              color: "#000",
              fontSize: "18px",
              fontFamily: "Montserrat",
              fontWeight: "700",
              padding: "20px 0 0 40px",
            }}
          >
            Activities
          </div>
          <div style={{ margin: "0 40px", height: "64%" }}>
            <Line options={options} data={data} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 w-full p-5">
          <div
            className="flex bg-white flex-col"
            style={{
              borderRadius: "20px",
              height: "256px",
            }}
          >
            <div className="flex justify-between w-full">
              <span
                className="float-left"
                style={{
                  color: "#000",
                  fontSize: "18px",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  padding: "20px 0 0 40px",
                }}
              >
                Top Products
              </span>
              <span
                className="float-right"
                style={{
                  color: "#858585",
                  fontSize: "12px",
                  fontFamily: "Montserrat",
                  padding: "20px 40px 0 0",
                }}
              >
                May - June 2021
              </span>
            </div>
            <div
              className="flex justify-between w-full"
              style={{ paddingBottom: "20px" }}
            >
              <div
                className="float-left"
                style={{ width: "200px", marginTop: "20px" }}
              >
                <Pie options={pieOptions} data={pieData} />
              </div>
              <div
                className="float-right"
                style={{ paddingRight: "150px", marginTop: "20px" }}
              >
                <div>
                  <span
                    style={{ ...styles.dot, backgroundColor: "#98D89E" }}
                  ></span>
                  <span style={styles.bullets}>Basic Tees</span>
                </div>
                <div style={styles.bulletPercent}>55%</div>
                <div>
                  <span
                    style={{ ...styles.dot, backgroundColor: "#EE8484" }}
                  ></span>
                  <span style={styles.bullets}>Custom Short Pants</span>
                </div>
                <div style={styles.bulletPercent}> 31%</div>
                <div>
                  <span
                    style={{ ...styles.dot, backgroundColor: "#F6DC7D" }}
                  ></span>
                  <span style={styles.bullets}>Super Hoodies</span>
                </div>
                <div style={styles.bulletPercent}>14%</div>
              </div>
            </div>
          </div>

          <div
            className="flex bg-white flex-col"
            style={{
              borderRadius: "20px",
              height: "256px",
            }}
          >
            <div className="flex justify-between w-full">
              <span
                className="float-left"
                style={{
                  color: "#000",
                  fontSize: "18px",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  padding: "20px 0 20px 40px",
                }}
              >
                Today’s schedule
              </span>
              <span
                className="float-right"
                style={{
                  color: "#858585",
                  fontSize: "12px",
                  fontFamily: "Montserrat",
                  padding: "20px 40px 0 0",
                }}
              >
                See all {">"}
              </span>
            </div>
            <div
              style={{
                border: "solid #9BDD7C",
                borderWidth: "0 0 0 5px",
                marginLeft: "40px",
                paddingLeft: "15px",
                marginBottom: "13px",
              }}
            >
              <div style={styles.line}>
                Meeting with suppliers from Kuta Bali
              </div>
              <div style={styles.lineSub}>14.00-15.00</div>
              <div style={styles.lineSub}>at Sunset Road, Kuta, Bali </div>
            </div>
            <div
              style={{
                border: "solid #6972C3",
                borderWidth: "0 0 0 5px",
                marginLeft: "40px",
                paddingLeft: "15px",
              }}
            >
              <div style={styles.line}>Check operation at Giga Factory 1</div>
              <div style={styles.lineSub}>18.00-20.00</div>
              <div style={styles.lineSub}>at Central Jakarta </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
