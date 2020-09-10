import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, PolarGrid, PolarAngleAxis, RadarChart, PolarRadiusAxis, Radar, Legend } from 'recharts';

export default function Home(props) {
	React.useEffect(() => {
		document.title = "Covid-19 India Tracker"
	}, [])
	console.log(props.world)
	return(
		<div className="container-fluid">
			<div className="row text-center">
				<div className="col-12 col-md-6 col-lg-4 col-xl-2">
					<div className="mx-2 my-4 bg-info cases-types h2 p-4 d-flex align-items-center">
						<span>Covid-19 India Tracker</span>
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-4 col-xl-2">
					<div className="mx-2 my-4 cases-types h3 p-4 d-flex flex-column justify-content-around" style ={{ backgroundColor: '#fd7e14' }}>
						<span>Confirmed</span>
						<span>{new Intl.NumberFormat('en-IN').format(props.confirmed[props.confirmed.length-1].confirmed)}</span>
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-4 col-xl-2">
					<div className="mx-2 my-4 bg-primary cases-types h3 p-4 d-flex flex-column justify-content-around">
						<span>Active</span>
						<span>{new Intl.NumberFormat('en-IN').format(props.active[props.active.length-1].active)}</span>
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-4 col-xl-2">
					<div className="mx-2 my-4 bg-danger cases-types h3 p-4 d-flex flex-column justify-content-around">
						<span>Deceased</span>
						<span>{new Intl.NumberFormat('en-IN').format(props.deceased[props.deceased.length-1].deceased)}</span>
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-4 col-xl-2">
					<div className="mx-2 my-4 bg-success cases-types h3 p-4 d-flex flex-column justify-content-around">
						<span>Recovered</span>
						<span>{new Intl.NumberFormat('en-IN').format(props.recovered[props.recovered.length-1].recovered)}</span>
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-4 col-xl-2">
					<div className="mx-2 my-4 cases-types h3 p-4 d-flex flex-column justify-content-around" style ={{ backgroundColor: '#6610f2' }}>
						<span>Tested</span>
						<span>{props.tested}</span>
					</div>
				</div>
			</div>
			<div className="row text-center">
				<div className="col-12 col-md-12 col-lg-12 col-xl-9">
					<div className="row text-center">
						<div className="col-12 col-md-12 col-lg-6 col-xl-6">
							<h4 style={{ color: '#fd7e14' }}>Confirmed</h4>
							<div className="m-2 home-graph">
								<ResponsiveContainer>
								<LineChart data={props.confirmed} margin={{ left: 20 }}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="date" />
									<YAxis scale="log" domain={[1, 10000000]} />
									<Tooltip />
									<Line type="monotone" dataKey="confirmed" stroke="#fd7e14" />
								</LineChart>
								</ResponsiveContainer>
							</div>
						</div>
						<div className="col-12 col-md-12 col-lg-6 col-xl-6">
							<h4 className="text-primary">Active</h4>
							<div className="my-2 home-graph">
								<ResponsiveContainer>
								<LineChart data={props.active} margin={{ left: 20 }}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="date" />
									<YAxis domain={[1, 1000000]} />
									<Tooltip />
									<Line type="monotone" dataKey="active" stroke="#007bff" />
								</LineChart>
								</ResponsiveContainer>
							</div>
						</div>
					</div>
					<hr />
					<div className="row text-center">
						<div className="col-12 col-md-12 col-lg-6 col-xl-6">
							<h4 className="text-danger">Deceased</h4>
							<div className="my-2 home-graph">
								<ResponsiveContainer>
								<LineChart data={props.deceased} margin={{ left: 20 }}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="date" />
									<YAxis scale="log" domain={[1, 500000]} />
									<Tooltip />
									<Line type="monotone" dataKey="deceased" stroke="#dc3545" />
								</LineChart>
								</ResponsiveContainer>
							</div>
						</div>
						<div className="col-12 col-md-12 col-lg-6 col-xl-6">
							<h4 className="text-success">Recovered</h4>
							<div className="my-2 home-graph">
								<ResponsiveContainer>
								<LineChart data={props.recovered} margin={{ left: 20 }}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="date" />
									<YAxis scale="log" domain={[1, 10000000]} />
									<Tooltip />
									<Line type="monotone" dataKey="recovered" stroke="#28a745" />
								</LineChart>
								</ResponsiveContainer>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-12 col-lg-12 col-xl-3">
					<div className="m-2" style={{ height: "60vh" }}>
						<ResponsiveContainer>
							<RadarChart data={props.world} margin={{ left: 20, right: 20 }} startAngle={35} endAngle={-325}>
								<PolarGrid />
								<PolarAngleAxis dataKey="type"/>
								<PolarRadiusAxis scale="sqrt" />
								<Radar dataKey="World" stroke="purple" fill="#8884d8" fillOpacity={0.6} />
								<Radar dataKey="India" stroke="orange" fill="gold" fillOpacity={0.6} />
								<Tooltip />
								<Legend />
							</RadarChart>
						</ResponsiveContainer>
					</div>
				</div>
			</div>
		</div>
	)
}