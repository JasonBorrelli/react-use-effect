import NotePad from "../section/NotePad";
import ThemeToggle from "../section/ThemeToggle";
import WindowSize from "../section/WindowSize";

export default function MainContent() {
    return(
        <main>
            <WindowSize />
            <ThemeToggle />
            <NotePad />
        </main>
    );
}