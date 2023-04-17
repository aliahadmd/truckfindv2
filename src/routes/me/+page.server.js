import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    const getUsersRoundtrips = async (userId) => {
        try {
            const roundtrip = serializeNonPOJOs(
                await locals.pb.collection('roundtrip').getFullList(undefined, {
                    filter: `user = "${userId}"`
                })
            );
            return roundtrip;
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    };

    return {
        roundtrip: getUsersRoundtrips(locals.user.id)
    };
};


