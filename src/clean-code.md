---
layout: layout-blog.njk
title: "Clean Code: Más allá del código que funciona"
description: "El clean code no es un conjunto de reglas estrictas, sino una serie de principios que ayudan a producir código intuitivo y fácil de modificar."
tags: ["software", "web"]
datearticle: "2025-05-21"
timearticle: "9 min lectura"
image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
---

# **"Clean Code: Más allá del código que funciona"**

_(O, como decimos los programadores: "No solo hagas que funcione, haz que no me dé dolor de cabeza después")_

---

### **¿Qué es el "Clean Code"?**

Imagina que entras a una cocina:

- **Código sucio:** Todo revuelto, cuchillos oxidados, manchas de salsa en las recetas.
- **Clean Code:** Todo etiquetado, ingredientes frescos, instrucciones claras paso a paso.

**Traducción no técnica:** Es escribir código que otros humanos (o tú en 6 meses) puedan entender y modificar **sin querer renunciar a la vida**.

---

### **3 Reglas de Oro (Para Sobrevivir en Equipo)**

#### 1. **Nombres que digan algo**

❌ **Malo:** `a = b * c` (¿Qué es `a`? ¿`b`? ¿Esto es un código o un acertijo?)  
✅ **Clean:** `area_rectangulo = base * altura`

👉 _Como nombrar archivos: "foto1.jpg" vs "vacaciones_playa_2024.jpg"_

#### 2. **Funciones que hagan UNA cosa**

❌ **Código "Frankenstein":**

```python
def hacer_todo():
    # 1. Pedir datos usuario
    # 2. Calcular impuestos
    # 3. Enviar email
    # ... (200 líneas después)
```

✅ **Clean:**

```python
def calcular_impuestos():
    ...

def enviar_email():
    ...
```

👉 _Como una receta: No pones "haz la pizza" sino "amasa la masa", "agrega ingredientes", "hornea 10 min"._

#### 3. **Comentarios útiles (no obvios)**

❌ **Inútil:**

```javascript
sumar(a, b) { // Suma a y b
    return a + b;
}
```

✅ **Útil:**

```javascript
// Ajusta el salario por inflación anual (USD)
// Fórmula: 2024 = salario * (1 + inflación_actual)
function ajustar_salario(...) { ... }
```

👉 _Como notas en un libro: No digas "capítulo 3 habla de Juan", explica "Juan descubre el secreto familiar en esta escena"._

---

### **¿Por qué debería importarte?**

- **Para jefes:** Un código limpio **ahorra un 40% de tiempo** en arreglar errores (estudio de Google).
- **Para devs:** Te evita mensajes de odio de tus compañeros.
- **Para todos:** Menos errores = menos apps que se caen = menos frustración.

---

### **Ejemplo Real (De mi propia pesadilla)**

**Proyecto:** Una app de bancos donde el código decía:

```java
void proc1() { ... } // "procesa todo"
```

**Resultado:** 3 meses para arreglar un bug simple.  
**Solución:** Dividirlo en:

```java
void validar_transferencia() { ... }
void calcular_comision() { ... }
```

**Moraleja:** Un código limpio es como **ordenar tu cuarto:** al principio da flojera, pero después encuentras todo rápido.

---

### **Tu Mini-Checklist**

✔️ ¿Puede entenderlo tu abuela (metafóricamente)?  
✔️ ¿Las funciones tienen menos de 20 líneas?  
✔️ ¿Los nombres explican el "qué" y el "por qué"?

> _"Escribir código es como escribir una novela: si solo tú la entiendes, es un diario íntimo, no software profesional."_

---
