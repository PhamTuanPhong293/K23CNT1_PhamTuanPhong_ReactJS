// Import trong một file khác 
import person from "./person.js";
console.log(person);

//
import { person, info } from "./person.js";
console.log(person);
console.log(info);

//  Import toàn bộ module
import * as otherName from "./person.js";
console.log(otherName);

// Cách hoạt động
{
    person: { name: "Phạm Tuấn Phong" },
    info: { event: "PR-Marketing" }
}
