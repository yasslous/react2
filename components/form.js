import { useState } from "react";

function Form() {
    const [Nom, setNom] = useState("")
    const [password, setPassword] = useState("")
    const [datedeNaissance, setDatedeNaissance] = useState("")
    const [Ville, setVille] = useState("")
    const [genre, setGenre] = useState("")
    const [loisirs, setLoisirs] = useState([])
    function handleLoisirs(e) {
        if (!loisirs.includes(e.target.value)) {
            setLoisirs([...loisirs, e.target.value]);
        } else {
            setLoisirs([...loisirs.filter((item) => item !== e.target.value)]);

        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        alert(`${Nom} ${password} ${datedeNaissance} ${Ville} ${genre} ${loisirs.join(',')}`)
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <p>
                <label>Nom</label>
                <input type="text" name="nom" onChange={(e) => setNom(e.target.value)} />
            </p>
            <p>
                <label>Mot de passe</label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            </p>
            <p>
                <label>Date de naissance</label>
                <input type="date" name="datedeNaissance" onChange={(e) => setDatedeNaissance(e.target.value)} />
            </p>
            <p>
                <label>Ville</label>
                <select name="ville" onChange={(e) => setVille(e.target.value)}>
                    <option>choisir une ville</option>
                    <option value="Agadir">Agadir</option>
                    <option value="Tiznit">Tiznit</option>



                </select>
            </p>
            <p>
                <label>Genre</label>
                <input type="radio" name="genre" value="Homme" onChange={(e) => setGenre(e.target.value)} /> Homme
                <input type="radio" name="genre" value="Femme" onChange={(e) => setGenre(e.target.value)} /> Femme
            </p>
            <p>
                <label>Loisirs</label>
                <input type="checkbox" name="loisirs" value="Sport" onChange={(e) => handleLoisirs(e)} />Sport
                <input type="checkbox" name="loisirs" value="Lecture" onChange={(e) => handleLoisirs(e)} />Lecture
                <input type="checkbox" name="loisirs" value="Musique" onChange={(e) => handleLoisirs(e)} />Musique
            </p>
            <p>
                <input type="submit" value="S'inscrire" />
            </p>
        </form>
    )

}
export default Form;