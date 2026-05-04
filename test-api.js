const url = 'https://gnews.io/api/v4/search?q=digital%20government&lang=es&max=5&sortby=publishedAt&token=' + process.env.NEWS_API_KEY;

fetch(url)
  .then(r => r.json())
  .then(d => {
    console.log('URL:', url);
    console.log('\n🔍 Respuesta completa de la API:\n');
    console.log(JSON.stringify(d, null, 2));
    
    console.log('\n-------------------\n');
    console.log('Total de artículos encontrados:', d.totalArticles);
    console.log('\n📰 Primeros 5 artículos:\n');
    
    if (d.articles && d.articles.length > 0) {
      d.articles.slice(0, 5).forEach((a, i) => {
        console.log(`${i + 1}. ${a.title}`);
        console.log(`   Descripción: ${a.description?.slice(0, 100) || 'N/A'}...`);
        console.log(`   Fuente: ${a.source.name}`);
        console.log(`   Fecha: ${new Date(a.publishedAt).toLocaleDateString('es-ES')}\n`);
      });
    } else {
      console.log('No se encontraron artículos.');
    }
  })
  .catch(err => console.error('Error:', err.message));
