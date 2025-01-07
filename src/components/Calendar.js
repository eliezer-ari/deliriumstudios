import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./styles/Calendar.css";

export default function Contact() {
	const [state, handleSubmit] = useForm("xqakqebl");
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	return (
		<div className="calendar-container">
			<div className="white-box" />
			<iframe src="https://app.acuityscheduling.com/schedule.php?owner=34421146&ref=embedded_csp" title="Schedule Appointment" className="iframecalendar" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
			<div className="white-box" />
		</div>
	);
}
