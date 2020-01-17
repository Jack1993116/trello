import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

import InputCustom from '../utils/input.custom';
import PrimaryBtn from '../utils/primary.button';
import CustomTextarea from '../utils/textarea.custom';

import './createteam.css';

const CreateTeam = ({show, onHide}) => {
	const [team, setTeam] = useState("");
	const [flag, setFlag] = useState(true);
	const [step, setStep] = useState(1);
	return (
		<Modal centered={true} show={show} onHide={onHide} dialogClassName="createboard-container" >
			<Modal.Header closeButton style={{border: "none", padding: 0}} >
				<Modal.Title style={{display: "flex", fontSize: "18px", overflow: "hidden"}} >
					<div className="createboard-l">
						{
							(step==1)&&
							<form>
								<h1 style={{fontSize: "24px"}} >Let's Build a Team</h1>
								<span className="fonts">Boost your productivity by making it easier for everyone to access boards in one location.</span>
								<label>Team Name</label>
								<InputCustom hint="Taco's co." type="text" onChange={(e)=>{
									setTeam(e.target.value);
									team == ""? setFlag(true): setFlag(false);
								}} />
								<span>This is the name of your company, team or organization.</span>
								<label>Team Description <span>Optional</span></label>
								<CustomTextarea hint="Our team organizes everything" type="textarea" />
								<span>Get your members on board with a few words about your team.</span>
								<PrimaryBtn size="lg" value="Continue" width="100%" disabled={flag} onClick={() => {setStep(2)}} >Continue</PrimaryBtn>
							</form>
						}
						{
							(step==2)&&
							<form>
								<h1 style={{fontSize: "24px"}} >Invite Your Team</h1>
								<span className="fonts">Trello makes teamwork your best work. Invite your new team members to get going!</span>
								<label>Team Members</label>
								<InputCustom hint="e.g. calrissian@cloud.ci" type="text" onChange={(e)=>{
									setTeam(e.target.value);
									team == ""? setFlag(true): setFlag(false);
								}} />
								<span>Paste as many emails here as needed.</span>
								<label>Give this message a personal touch.</label>
								<CustomTextarea hint="Our team organizes everything" type="textarea" defaultValue={`I'd like to invite you to join ${team} on Trello. We use Trello to organize tasks, projects, due dates, and much more.`} />
								<span>Get your members on board with a few words about your team.</span>
								<PrimaryBtn size="lg" value="Continue" width="100%" disabled={flag} onClick={() => {onHide(false)}} >Invite to Team</PrimaryBtn>
							</form>
						}
					</div>
					<div className="createboard-r">
						<div className="images">
							<img width="342" height="256" src="https://a.trellocdn.com/prgb/dist/images/organization/empty-board.286f8fc83e01c93ed27e.svg" alt="" role="presentation" />
						</div>
					</div>
				</Modal.Title>
			</Modal.Header>
		</Modal>
	)
}

export default CreateTeam;