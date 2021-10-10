
import HeaderTopPage from '../../components/header-top-page';
import HorizontalDot from '../../components/HorizontalDot';
import Link from "next/link";
import Stat from '../../components/Stat';
import Animation from '../../components/Animation';
const stattitle = ["NOVA Stats", "sNOVA Stats", "MoneyPot $309.09"]
export default function dashboard() {
    return (
        <div className="relative px-16 dashboardpage" style={{ backgroundColor: "#FAFAFA" }}>
            <HeaderTopPage active={0} />
            <Animation />
            <div className="flex justify-between flex-row dashboarddotparent">
                <div className="pt-5 dashboarddot" style={{ paddingLeft: "50%" }}>
                    <HorizontalDot />
                </div>
                <Link href="/dashboard">
                    <a href="#" className="topbutton active">TOTAL DEPOSITED</a>
                </Link>
            </div>
            <div className="flex flex-col items-end pt-2 text-4xl font-bold">
                <div>$2,551,015.87</div>
                <HorizontalDot />
            </div>
            <div className="text-center font-black text-4xl">DASHBOARD</div>
            <div className="flex justify-between pt-8 flex-wrap dashboard">
                {
                    stattitle.map((data, i) => {
                        return <Stat title={data}
                            index={i} />
                    })
                }
            </div>
        </div>
    )
}