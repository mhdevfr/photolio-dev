interface User {
  id: string;
  pseudo: string;
  profil_picture: string;
  biography: string;
  country: string;
  work: string;
  current_plan: string;
  instagram_network: string;
  pinterest_network: string;
  linkedin_network: string;
}

export const fetchData = async (
  client: SupabaseClient,
  user: Ref<{ id: string } | null>, 
  users: Ref<User[]>,                
  biographyContent: Ref<string>      
): Promise<void> => {
  if (!user.value) return;  

  const { data, error } = await client
    .from('users')
    .select('*')
    .eq('id', user.value.id);  

  if (data) {
    users.value = data as User[];  
  } else {
    console.error(error);
  }
};