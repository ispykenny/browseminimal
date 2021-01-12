const createSlug = $string => {
  const slug = $string.replace(/\s/g, '-').toLowerCase();
  return slug
}

export default createSlug;