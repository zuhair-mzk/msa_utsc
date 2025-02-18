import "../styles/osp_banner.css";

// Milestones
import milestone1 from "../images/osp_milestone1.png"
import milestoneQmarkW2 from "../images/milestoneQMarksW2.png"
import milestoneQmarkW3 from "../images/milestoneQMarksW3.png"
import milestoneQmarkW4 from "../images/milestoneQMarksW4.png"

const Osp_Banner = () => {
    return(
        <section id="osp_banner">
            <h2 className="title">OSP Fundraising 2025</h2>
            {/* <h2>Weekly Progress</h2> */}
            <div className="osp-banner-content">
                <div className="challenge-container">
                    <h2>WEEK 1</h2>
                    <a target="_blank" href="https://www.launchgood.com/v4/campaign/the_orphan_sponsorship_program_2025_utscmsa">
                    <div className="challenge-img current-challenge">
                        <img alt="OSP milestone image" src={milestone1}></img>
                    </div>
                    </a>
                </div>

                <div className="challenge-container">
                    <h2>WEEK 2</h2>
                    <a target="_blank" href="https://www.launchgood.com/v4/campaign/the_orphan_sponsorship_program_2025_utscmsa">
                    <div className="challenge-img">
                        <img alt="OSP milestone image" src={milestoneQmarkW2}></img>
                    </div>
                    </a>
                </div>

                <div className="challenge-container">
                    <h2>WEEK 3</h2>
                    <a target="_blank" href="https://www.launchgood.com/v4/campaign/the_orphan_sponsorship_program_2025_utscmsa">
                    <div className="challenge-img">
                        <img alt="OSP milestone image" src={milestoneQmarkW3}></img>
                    </div>
                    </a>
                </div>

                <div className="challenge-container">
                    <h2>WEEK 4</h2>
                    <a target="_blank" href="https://www.launchgood.com/v4/campaign/the_orphan_sponsorship_program_2025_utscmsa" >
                    <div className="challenge-img">
                        <img alt="OSP milestone image" src={milestoneQmarkW4}></img>
                    </div>
                    </a>
                </div>
            </div>
            

        </section>
    );
}

export default Osp_Banner