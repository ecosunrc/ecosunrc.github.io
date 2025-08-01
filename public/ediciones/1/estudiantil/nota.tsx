import Nota from '../../../../src/components/notas/Nota';
import InterviewCard from '../../../../src/components/cards/InterviewCard';

export default function NotaEstudiantil() {
  return (
    <Nota
      title='¿Qué modelo de universidad queremos defender?'
      publishedAt='11 de agosto de 2025'
    >
      <p>
        La Universidad Nacional de Río Cuarto (UNRC) cuenta con más de 15.000 estudiantes, que representan aproximadamente al 10% de la población de la ciudad. Es la segunda universidad más grande de Córdoba, posicionándose como una de las más importantes de la provincia.
        <br />
        Una universidad nacional, pública y gratuita, no es ajena a la realidad que atraviesa el país. En los últimos años una inflación desmedida provocó un aumento sostenido en el costo de vida. Actualmente, la canasta básica alimentaria por persona ronda los $160.000. Para los estudiantes, sin embargo, los gastos van mucho más allá de la alimentación: deben afrontar alquileres, materiales de estudio, vestimenta y demás necesidades para sostener una vida digna.
      </p>

      <hr className='my-6 border-white/30' />

      <h2>Aumento y actualización de becas</h2>
      <p>
        Según el reglamento general, debe destinarse, al menos, el 2% del presupuesto oficial de la universidad a becas. Actualmente, el monto de las becas de ayuda económica se encuentra en $105.000, y la dirigida para estudiantes en situación de discapacidad en $205.000. Los datos recopilados desde el Sistema de Información de la Universidad nos muestran que, aproximadamente, 450 estudiantes reciben la beca de ayuda económica, 300 la de alojamiento y 120 la de menú destinada a centros de estudiantes.
        <br />
        A raíz de esta situación, hace tiempo, los estudiantes reunidos en la Asamblea Estudiantil estamos llevando a cabo diversas acciones de visibilización y reclamo en la universidad, tales como pegatineadas de carteles, panfleteadas y pintadas de pasacalles, teniendo en cuenta las siguientes consignas: aumento en la cantidad y mejora en la calidad de los menúes, con una baja en su valor; incremento del presupuesto total destinado a becas y actualización de su monto, en principio, acorde al valor de la canasta básica alimentaria, cumplimiento de la ocupación total de las 416 unidades cama, incluyendo el reacondicionamiento de las residencias, la habilitación del SUM, la finalización de la obra de gas y el no cobro de los servicios a los residentes. 
      </p>

      <h2>El menú no es un lujo, es un derecho universal</h2>
      <p>
        La Universidad Nacional de Río Cuarto afirma que, como institución educativa, tiene la responsabilidad indelegable de garantizar el acceso al conocimiento en condiciones de igualdad. Es así como nuestra universidad dispone de: un comedor que posee espacio para 400 personas, y un menú diario –almuerzo– que se reparte en tres turnos con capacidad para, al menos, 1.200 menúes.
        <br />
        A razón de esto, en junio realizamos una venta de choripanes al costo, junto con una panfleteada y pintada de pasacalles bajo el lema: "El menú no es un lujo, es un derecho universal”. Dicho accionar se realizó con el propósito de evidenciar la baja producción de menúes, con respecto a otros años, en la universidad, y visibilizar que la cantidad de estudiantes que circulan durante el mediodía, superan el número de menúes disponibles. A esto debemos agregarle que el costo del menú, en contraposición a la calidad, no para de actualizarse mes a mes.
      </p>

      <InterviewCard
        nombre='Celeste Escudero'
        fecha='Junio, 2025'
        cita='Cada vez se venden menos menúes, cada vez son menos los estudiantes que acceden y cada vez es más alto el costo y menor la calidad. El menú existe como una política histórica de bienestar que intenta que el estudiante se pueda sostener en la universidad.'
        imagen='/imagenes/entrevistados/Celeste-Escudero.png'
      />

      <h2>Reflexión final</h2>
      <p>
        Las condiciones para estudiar en la UNRC se complejizan en presencia de un contexto incierto, y si bien existen políticas de bienestar, resultan insuficientes frente a la crisis económica actual. La alimentación, el alojamiento y el acceso a materiales básicos de estudio no deben quedar librados a la voluntad individual ni a la resistencia del estudiantado.
        <br />
        La universidad debe garantizar el ingreso, la permanencia y el egreso de quienes la habitan. Con organización, visibilización y participación activa, los estudiantes reafirmamos que el bienestar estudiantil no es un privilegio, es un derecho.
        <br />
        Por esta razón, desde la Asamblea Estudiantil impulsamos reclamos que abren un debate que atraviesa a toda la comunidad educativa:  
      </p>
      <h2>
        ¿Qué modelo de universidad queremos defender?
      </h2>
    </Nota>
  );
}
