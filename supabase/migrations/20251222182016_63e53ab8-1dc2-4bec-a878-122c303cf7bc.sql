-- Create the update function first
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create lab_tests table for storing test rate list
CREATE TABLE public.lab_tests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  test_code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2) NOT NULL,
  department TEXT NOT NULL,
  required_sample TEXT,
  processing_tat_hours INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.lab_tests ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (anyone can view tests)
CREATE POLICY "Lab tests are publicly viewable" 
ON public.lab_tests 
FOR SELECT 
USING (true);

-- Create index for search performance
CREATE INDEX idx_lab_tests_name ON public.lab_tests USING gin(to_tsvector('english', name));
CREATE INDEX idx_lab_tests_department ON public.lab_tests(department);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_lab_tests_updated_at
BEFORE UPDATE ON public.lab_tests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();