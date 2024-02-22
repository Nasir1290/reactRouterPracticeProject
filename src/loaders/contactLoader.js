import { getContact, getContacts } from "../contact";

// how to search items
export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get('q');
    const contacts = await getContacts(q);

    return { contacts: contacts, q: q };
}

export async function getContactLoader({ params }) {
    const contact = await getContact(params.contactId);
    if (!contact) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return { contact: contact };


}