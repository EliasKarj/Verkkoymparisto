export default function Greeting({ name }) {
    return <h1>Hello, {name || "Guest"}!</h1>;
}
