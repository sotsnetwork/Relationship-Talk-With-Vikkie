import { createClient } from '@supabase/supabase-js';

// These will be populated when you connect to Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database helper functions
export const purchaseService = {
  async createPurchase(email: string, productSlug: string) {
    const { data, error } = await supabase
      .from('purchases')
      .insert({
        email,
        product_slug: productSlug,
        delivered: false,
        purchased_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async markAsDelivered(purchaseId: string) {
    const { data, error } = await supabase
      .from('purchases')
      .update({ delivered: true })
      .eq('id', purchaseId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getPurchaseHistory(email: string) {
    const { data, error } = await supabase
      .from('purchases')
      .select('*')
      .eq('email', email)
      .order('purchased_at', { ascending: false });

    if (error) throw error;
    return data;
  }
};

export const sessionService = {
  async getSessions() {
    const { data, error } = await supabase
      .from('sessions')
      .select('*')
      .order('price', { ascending: true });

    if (error) throw error;
    return data;
  }
};