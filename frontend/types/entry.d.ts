export type Entry = {
  id: Number;
  first_name: String;
  last_name: String;
  full_name: String;
  first_name_kana: String;
  last_name_kana: String;
  phase_id: Number;
  phase_name: String;
  status_id: Number;
  status_name: String;
  mail: String;
  birth_day: String;
  post_code: String;
  address: String;
  phone: String;
  positions: Array<Number>;
  positions_name: Array<String>;
  final_positon: String;
  office: String;
  join_day: String;
  source: String;
  free_message: String;
  image: String;
};

export type EntryWatcher = {
  id: Number;
  phase_id: Number;
  user_id: Number;
  user_Name: String;
};
