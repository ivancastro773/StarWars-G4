import Character from "../character/Character";
//mocks
import {dataCharacter} from '../../../../mocks/mocksCharacterOne';
function Characters() {
	return (
		<Character character={dataCharacter}/>
	)
}

export default Characters;
