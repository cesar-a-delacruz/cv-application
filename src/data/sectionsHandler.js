import sections from "./sections";

export default {
    read(id) {
        return sections.find(section => section.id === id);
    },
    readAll() {
        return sections;
    },
    update(id, newInfo) {
        sections.forEach((section, index, array) => {
            if (id === section.id) {
                array[index].info = newInfo;
                return;
            }
      })
    },
}