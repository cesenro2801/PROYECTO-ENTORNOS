import styled from "styled-components";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


// Creacion de estilos para el reporte
const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4"
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

export function ReporteKardex({data}) {
    const renderTableRow = (rowData, isHeader)=>(
        <View key={rowData.id}>
            <Text>{rowData.fecha}</Text>
            <Text>{rowData.descripcion}</Text>
        </View>
    )
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    return (
      <Document>
        <Page size="A4" style={styles.page} orientation="landscape">
          <View style={styles.section}>
            <View>
              <Text style={{ textAlign: "center", fontSize: 18, marginBottom: 10 }}>Movimientos de Kardex</Text>
              <Text style={{ textAlign: "center", fontSize: 12 }}>Fecha y Hora de Impresión: {formattedDate}</Text>
              <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: "row", borderBottom: "1px solid black", paddingBottom: 5 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: "bold" }}>Fecha</Text>
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={{ fontWeight: "bold" }}>Producto</Text>
                  </View>
                  <View style={{ flex: 1.5 }}>
                    <Text style={{ fontWeight: "bold" }}>Tipo</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: "bold" }}>Cantidad</Text>
                  </View>
                </View>
                {data?.map((item) => (
                  <View style={{ flexDirection: "row", borderBottom: "1px solid black", paddingBottom: 5 }} key={item.id}>
                    <View style={{ flex: 1 }}>
                      <Text>{item.fecha}</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                      <Text>{item.descripcion}</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                      <Text style={{ textAlign: "center" }}>{item.tipo}</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                      <Text style={{ textAlign: "center" }}>{item.cantidad}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
}

const Container = styled.div`

`