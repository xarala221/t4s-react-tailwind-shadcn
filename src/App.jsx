import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function App() {
  const livresParDefaut = [
    { id: 1, titre: 'Lean Startup', auteur: 'Eric Ries' },
    {
      id: 2,
      titre: "Deux capitaines d'industrie se racontent",
      auteur: 'Paul Fokam et Koffi Djondo',
    },
    { id: 3, titre: 'A la mesure de mes pas', auteur: 'Jean Samuel' },
  ]

  const [livres, setLivres] = useState(livresParDefaut)

  const updateLivres = () => {
    setLivres(livresParDefaut)
  }

  const ajouterLivre = () => {
    const livre = { id: 4, titre: 'Une si longue lettre', auteur: 'Mariama BA' }
    setLivres([...livresParDefaut, livre])
  }

  return (
    <div className='container p-4'>
      <div className='flex justify-between pb-2'>
        <h1 className='font-bold text-lg'>Mes lectures</h1>
        <Button onClick={ajouterLivre}>+ Ajouter</Button>
      </div>
      <hr />
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>ID</TableHead>
              <TableHead>Titre</TableHead>
              <TableHead>Auteur</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {livres.map((livre, index) => (
              <TableRow key={index}>
                <TableCell className='font-medium'>{livre.id}</TableCell>
                <TableCell>{livre.titre}</TableCell>
                <TableCell>{livre.auteur}</TableCell>
                <TableCell className='text-right'>
                  <Button className='mx-4 bg-red-600'>Modifier</Button>
                  <Button className='mr-4'>Supprimer</Button>
                  <Button>Lu</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default App
