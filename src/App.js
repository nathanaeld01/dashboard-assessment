import { Dashboard } from "./components/dashboard";
import { Sidebar } from "./components/sidebar";

const App = () => {
	return (
		<div className="w-full h-dvh flex">
			<Sidebar />
			<Dashboard />
		</div>
	);
};

export default App;
