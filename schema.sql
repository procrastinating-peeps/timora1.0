-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text not null,
  education_level text check (education_level in ('school', 'college', 'skills')),
  branch_or_class text,
  target_goal text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Search history & AI suggestions
create table public.study_queries (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade,
  topic text not null,
  ai_summary text,
  recommended_resources jsonb default '[]'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Study session checklist
create table public.study_tasks (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  is_completed boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Row Level Security
alter table public.profiles enable row level security;
alter table public.study_queries enable row level security;
alter table public.study_tasks enable row level security;

create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

create policy "Users can read own queries" on public.study_queries
  for select using (auth.uid() = user_id);

create policy "Users can insert own queries" on public.study_queries
  for insert with check (auth.uid() = user_id);

create policy "Users can manage own tasks" on public.study_tasks
  for all using (auth.uid() = user_id);