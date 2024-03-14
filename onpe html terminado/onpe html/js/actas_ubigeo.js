const getDepa = async (value) => {
    let data
    if (value == "P"){
        data = await fetch("https://oaemdl.es/onpe_sweb_php/actas/ubigeo/Peru")
    } else if (value == "E") {
        data = await fetch("https://oaemdl.es/onpe_sweb_php/actas/ubigeo/")
    }
    const departamentos = await data.json()
    if (data.status == "200") {
        let html = `<option id="departamentos" selected="selected" value="primero">--SELECCIONE--</option>`
        departamentos.forEach(depa => {
            html += `
            <option value="${depa.Detalle}">${depa.Detalle}</option>
            `
        });
        document.getElementById("cdgoDep").innerHTML = html
        document.getElementById('cdgoProv').disabled = true
        document.getElementById('cdgoDist').disabled = true
        document.getElementById('actas_ubigeo').disabled = true
        document.getElementById('cdgoProv').value = "primero"
        document.getElementById('cdgoDist').value = "primero"
        document.getElementById('actas_ubigeo').value = "primero"
    }
}

const getProvincia = async (value) => {
    const data = await fetch(`https://oaemdl.es/onpe_sweb_php/actas/ubigeo/Peru/${value}`)
    const provincias = await data.json()
    if (data.status == "200") {
        let html = `<option id="provincias" selected="selected" value="primero">--SELECCIONE--</option>`
        try {
            provincias.forEach(provi => {
                html += `
                <option value="${value}/${provi.Detalle}">${provi.Detalle}</option>
                `
            });
        } catch {
            html += `
            <option value="${value}/${provincias.Detalle}">${provincias.Detalle}</option>
            `
        }
        document.getElementById("cdgoProv").innerHTML = html
        document.getElementById('cdgoProv').disabled = false
        document.getElementById('cdgoDist').disabled = true
        document.getElementById('actas_ubigeo').disabled = true
        document.getElementById("actas").innerHTML = ``
        document.getElementById('cdgoDist').value = "primero"
        document.getElementById('actas_ubigeo').value = "primero"
    }
}

const getDistrito = async (value) => {
    const data = await fetch(`https://oaemdl.es/onpe_sweb_php/actas/ubigeo/Peru/${value}`)
    const distritos = await data.json()
    if (data.status == "200") {
        let html = `<option id="distritos" selected="selected" value="primero">--SELECCIONE--</option>`
        try {
            distritos.forEach(distri => {
                html += `
                <option value="${value}/${distri.Detalle}">${distri.Detalle}</option>
                `
            });
        } catch {
            html += `
                <option value="${value}/${distritos.Detalle}">${distritos.Detalle}</option>
                `
        }  
        document.getElementById("cdgoDist").innerHTML = html
        document.getElementById('cdgoDist').disabled = false
        document.getElementById('actas_ubigeo').disabled = true
        document.getElementById("actas").innerHTML = ``
        document.getElementById('actas_ubigeo').value = "primero"
    }
}

const getLocal = async (value) => {
    const data = await fetch(`https://oaemdl.es/onpe_sweb_php/actas/ubigeo/Peru/${value}`)
    const locales = await data.json()
    if (data.status == "200") {
        let html = `<option id="-1?-1" selected="selected" value="primero">--SELECCIONE--</option>`
        try {
            locales.forEach(local => {
                html += `
                <option value="${value}/${local.RazonSocial}">${local.RazonSocial}</option>
                `
            });
        } catch {
            html += `
                <option value="${value}/${locales.RazonSocial}">${locales.RazonSocial}</option>
                `
        }
        document.getElementById("actas_ubigeo").innerHTML = html
        document.getElementById('actas_ubigeo').disabled = false
        document.getElementById("actas").innerHTML = ``
    }
}

const getActas = async (value) => {
    const data = await fetch(`https://oaemdl.es/onpe_sweb_php/actas/ubigeo/Peru/${value}`)
    const actas = await data.json()
    if (data.status == "200") {
        let html = `
          
        <div class="col-xs-12 pbot30">
        <p class="subtitle">LISTADO DE MESAS</p>
        <div id="page-wrap">
          <table id="actas" class="table17" cellspacing="0">
        <tbody>
        <tr>
        `
        let cont = 0
        actas.forEach(acta => {
            html += `
            <td bgcolor="#C1C1C1" onclick="javascript:getActa('${acta.idGrupoVotacion}', '${value}');" style="cursor:pointer"><a>${acta.idGrupoVotacion}</a></td>
            `
            cont++
            if (cont % 10 == 0) {
                html += `
                    </tr>
                    <tr>
                `
            }
        });
            html += `
            </tr>
            </tbody>
            </table>
            </div>
          </div>

          <div class="col-xs-12 cont-recto oculto-leyenda-color-fondo-mesas">
            <div class="col-md-4"><img src="images/procesacon.jpg"> Procesada con imagen</div>
            <div class="col-md-4"><img src="images/procesasin.jpg"> Procesada sin imagen</div>
            <div class="col-md-4"><img src="images/sinprocesa.jpg"> Sin procesar</div>
          </div>

          <div class="row pbot30">
            <div class="col-lg-8 centered">
              <div class="col-xs-12 col-md-12 col-lg-12">
                <table>
                  <tbody>
                    <tr>
                      <td colspan="10">
                        <div class="conte-paginador">
                          <span class="paginador-txt">Total de mesas: ${cont}</span>
                        </div>
                      </td>
                    </tr>  
                    <tr>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan="10">Página: 
                        <ul class="pagination">
                          <li class="active"><a class="paginador-n1">1</a></li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `
        document.getElementById("actas").innerHTML = html
        
    }
}
const getActa = async (id, value) => {
    let html = `
        <a class="regresar" onclick="getActas('${value}')"> < REGRESAR</a>
        <div id="divDetalle" class="ptop20">
        </div>
    `
    document.getElementById("actas").innerHTML = html
    actas_bscarPrNmroMesa(id)
}
getDepa("P")