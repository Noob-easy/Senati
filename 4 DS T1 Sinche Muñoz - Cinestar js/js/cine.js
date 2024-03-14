const getCine = async ()=>{
    const data = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines` , `https://oaemdl.es/cinestar_sweb_php/cines/1/peliculas/${id}` ,`https://oaemdl.es/cinestar_sweb_php/cines/1/tarifas`)

    if (data.status == 200 ) {
        const cine = await data.json()
        let html = `Cine

            <div class="contenido-interno" id="contenido-interno">
		
				<h2>${cine.RazonSocial}</h2>
				<div class="cine-info">
					<div class="cine-info datos">
						<p>${cine.Direccion}</p>
						<p>${cine.Telefonos}</p>
						<br/>
						<div class="tabla">
							<div class="fila">
								<div class="celda-titulo">${cine.DiassSemana}</div>
								<div class="celda">${cine.Precio}</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">Martes</div>
								<div class="celda">${cine.Precio}</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">${cine.DiassSemana}</div>
								<div class="celda">${cine.Precio}</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">${cine.DiassSemana}</div>
								<div class="celda">${cine.Precio}</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">${cine.DiassSemana}</div>
								<div class="celda">${cine.Precio}</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">${cine.DiassSemana}</div>
								<div class="celda">${cine.Precio}</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">${cine.DiassSemana}</div>
								<div class="celda">${cine.Precio}</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">${cine.DiassSemana}</div>
								<div class="celda">${cine.Precio}</div>
							</div>
						</div>
						<div class="aviso">
							<p>${cine.Aviso}</p>
						</div>
					</div>
					<img src="img/cine/1.2.jpg"/>
					<br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
					<div class="cine-info peliculas">
						<div class="tabla">
							<div class="fila">
								<div class="celda-cabecera">Películas</div>
								<div class="celda-cabecera">Horarios</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">GUERRERO</div>
								<div class="celda">13:00 / 13:30 / 14:00 / 15:00 / 15:30 / 16:00 / 17:00 / 17:30 / 18:00 / 19:00 / 20:00 / 21:00 / 21:55</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">LA LEYENDA DE LA BELLA DURMIENTE</div>
								<div class="celda">19:45 / 21:30</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">ROGUE ONE</div>
								<div class="celda">13:00 / 14:00 / 15:30 / 16:30 / 18:00 / 19:00 / 19:30 / 20:30 / 21:30 / 21:55</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">MOANA</div>
								<div class="celda">13:00 / 15:15 / 17:30</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<img style="float:left;" src="img/cine/1.3.jpg" alt="Imagen del cine"/>
					<span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
						Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
						<br/><br/>
						Visitános y diviértete con nosotros. 
						<br/><br/>
						<b>CINESTAR</b>, siempre pensando en tí. 
					</span>		
				</div>
				
			</div>`

            document.getElementById(`contenido-interno`).innerHTML = html
    }
}