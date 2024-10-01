export const updatePlan = async (
  user: Ref<{ id: string } | null>, 
  plan: string,
  client: SupabaseClient,
  users: Ref<User[]>,                
): Promise<void> => {
  try {
    const { error } = await client
      .from('users')
      .update({ current_plan: plan })
      .eq('id', user.value?.id);

    if (error) {
      console.error('Erreur lors de la mise à jour du plan: ', error.message);
    } else {
      users.value[0].current_plan = plan;
      console.log('Plan mis à jour avec succès');
    }
  } catch (err) {
    console.error('Erreur inattendue :', err);
  }
};
