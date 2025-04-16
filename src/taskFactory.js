import { format } from "date-fns";

let counter = 0;

export function taskFactory(id=counter++, name="Insert Your Task name", deadline=format(new Date(), "yyyy-MM-dd")) {
    return {
        id: id,
        name: name,
        deadline: deadline
    }

}