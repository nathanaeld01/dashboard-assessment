import { Dashboard } from "./components/dashboard";
import { Sidebar } from "./components/sidebar";

const App = () => {
	return (
		<div className="w-full min-h-dvh h-full">
			<Sidebar />
			<Dashboard />
		</div>
	);
};

export default App;
