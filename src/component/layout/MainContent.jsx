import NotePad from "../section/NotePad";
import ThemeToggle from "../section/ThemeToggle";


export default function MainContent() {
    return(
        <main>
            <ThemeToggle />
            <NotePad />
        </main>
    );
}