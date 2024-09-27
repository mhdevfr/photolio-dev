interface User {
  id: string;
  pseudo: string;
  profil_picture: string;
  biography: string;
  country: string;
  work: string;
  current_plan: string;
}

export const fetchData = async (
  client: SupabaseClient,
  user: Ref<{ id: string } | null>,  // Le type de `user` avec `id` ou `null`
  users: Ref<User[]>,                // Référence au tableau d'utilisateurs
  biographyContent: Ref<string>      // Référence à la biographie
): Promise<void> => {
  if (!user.value) return;  // Si l'utilisateur n'existe pas, on ne fait rien

  const { data, error } = await client
    .from('users')
    .select('id, pseudo, profil_picture, biography, country, work, current_plan')
    .eq('id', user.value.id);  // Récupérer les données avec l'ID de l'utilisateur

  if (data) {
    users.value = data as User[];  // Cast `data` en tableau de `User`
    biographyContent.value = users.value[0]?.biography ?? '';  // Assigne la biographie
  } else {
    console.error(error);
  }
};