import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Select } from "@chakra-ui/react";
import axios from "axios";
import "./AllBug.css";

export default function RemoveBugs() {
	const [project, setproject] = useState("");
	const [title, setTitle] = useState("");
	const [location, setLocation] = useState("");
	const [threat, setThreat] = useState("");
	const [loading, setLoading] = useState(false);
	const [text, setText] = useState([]);

	const toast = useToast();
	const history = useNavigate();

	// const handleOnChange = (event) => {
	// 	// console.log("On change");
	// 	setText(event.target.value);
	// };

	useEffect(() => {
		submitHandler();
	}, []);
	let arr;

	const submitHandler = async () => {
		let data;
		try {
			// const config = {
			// 	headers: {
			// 		"Content-type": "application/json",
			// 	},
			// };
			data = await axios.get("/api/bugs");
			// console.log(data.data);
			toast({
				title: "Bug Report Succesfull",
				status: "success",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			setLoading(false);
		} catch (error) {
			console.log(error);
			toast({
				title: "Error Occured",
				status: "error",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			setLoading(false);
		}
		arr = data.data;
		setText(arr);
	};

	return (
		<>
			<div className="container my-3">
				<div className="mb-3">
					<h1 className="h1">All Bugs</h1>
					<p>ResolveBugs Your bugs</p>

					{text.map((data) => (
						<div className="bugDetail">
							<p>Title : {data.title}</p>
							<p>Detail : {data.project}</p>
							<p>Location : {data.location}</p>
							<p>Threat : {data.threat}</p>
							<p>Date Created : {data.createdAt}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
