/*
  # Create Contact Submissions and Analytics Tables

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `website` (text, optional)
      - `goals` (text)
      - `created_at` (timestamp)
    - `analytics_events`
      - `id` (uuid, primary key)
      - `event_type` (text)
      - `user_agent` (text)
      - `referrer` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policy allowing public inserts for submissions
    - Add policy allowing public inserts for analytics events
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  website text,
  goals text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS analytics_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  user_agent text,
  referrer text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public analytics events"
  ON analytics_events
  FOR INSERT
  TO anon
  WITH CHECK (true);
