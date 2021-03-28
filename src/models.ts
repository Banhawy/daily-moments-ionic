export interface Entry {
    id: string;
    title: string;
    description: string;
}

export function toEntry(doc: firebase.default.firestore.DocumentSnapshot): Entry {
    return { id: doc.id, ...doc.data() } as Entry;
}